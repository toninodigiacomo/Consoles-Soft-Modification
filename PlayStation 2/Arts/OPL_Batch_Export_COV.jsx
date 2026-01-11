#target photoshop

function main() {
    if (app.documents.length === 0) {
        alert("Ouvrez votre document Photoshop avec vos calques.");
        return;
    }

    var doc = app.activeDocument;
    
    // 1. Demander le dossier de destination
    var destFolder = Folder.selectDialog("Dossier d'export pour les pochettes");
    if (destFolder == null) return;

    // 2. Paramètres JPEG "PS2-Safe" (Baseline Standard)
    var jpgOptions = new JPEGSaveOptions();
    jpgOptions.formatOptions = FormatOptions.STANDARDBASELINE; 
    jpgOptions.quality = 9; 
    jpgOptions.embedColorProfile = false; 

    // 3. Boucle sur les calques
    for (var i = 0; i < doc.layers.length; i++) {
        var layer = doc.layers[i];

        // Masquer tous les calques sauf celui en cours
        for (var j = 0; j < doc.layers.length; j++) {
            doc.layers[j].visible = (doc.layers[j] == layer);
        }

        // Créer un document temporaire pour le redimensionnement
        // Cela évite de modifier ton fichier de travail original
        var tempDoc = app.documents.add(doc.width, doc.height, doc.resolution, "Temp", NewDocumentMode.RGB);
        app.activeDocument = doc;
        layer.copy();
        app.activeDocument = tempDoc;
        tempDoc.paste();

        // --- REDIMENSIONNEMENT ---
        // Format standard OPL : 140x200 pixels
        tempDoc.resizeImage(UnitValue(240,"px"), UnitValue(400,"px"), null, ResampleMethod.BICUBIC);

        // --- SAUVEGARDE ---
        var fileName = layer.name + ".jpg";
        var saveFile = new File(destFolder + "/" + fileName);
        tempDoc.saveAs(saveFile, jpgOptions, true, Extension.LOWERCASE);

        // Fermer le doc temporaire sans enregistrer
        tempDoc.close(SaveOptions.DONOTSAVECHANGES);
        
        // Revenir au doc principal
        app.activeDocument = doc;
    }

    alert("Exportation terminée ! Vos images sont en 240x400 (Baseline JPEG).");
}

main();