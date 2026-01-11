#target photoshop

function main() {
    if (app.documents.length === 0) {
        alert("Ouvrez votre document Photoshop avec vos calques de disques.");
        return;
    }

    var doc = app.activeDocument;
    
    // 1. Demander le dossier de destination
    var destFolder = Folder.selectDialog("Dossier d'export pour les disques (ICO)");
    if (destFolder == null) return;

    // 2. Paramètres PNG-24 pour la transparence
    var pngOptions = new ExportOptionsSaveForWeb();
    pngOptions.format = SaveDocumentType.PNG;
    pngOptions.PNG8 = false; // Force le PNG-24 pour une meilleure qualité
    pngOptions.transparency = true;

    // 3. Boucle sur les calques
    for (var i = 0; i < doc.layers.length; i++) {
        var layer = doc.layers[i];

        // Masquer tous les calques sauf celui en cours
        for (var j = 0; j < doc.layers.length; j++) {
            doc.layers[j].visible = (doc.layers[j] == layer);
        }

        // Créer un document temporaire (Carré pour les disques)
        var tempDoc = app.documents.add(doc.width, doc.height, doc.resolution, "TempICO", NewDocumentMode.RGB, DocumentFill.TRANSPARENT);
        app.activeDocument = doc;
        layer.copy();
        app.activeDocument = tempDoc;
        tempDoc.paste();

        // --- REDIMENSIONNEMENT ---
        // Format standard OPL pour les disques : 128x128 pixels (carré)
        tempDoc.resizeImage(UnitValue(128,"px"), UnitValue(128,"px"), null, ResampleMethod.BICUBIC);

        // --- SAUVEGARDE ---
        // OPL attend l'extension _ICO.png
        var fileName = layer.name + ".png";
        var saveFile = new File(destFolder + "/" + fileName);
        tempDoc.exportDocument(saveFile, ExportType.SAVEFORWEB, pngOptions);

        // Fermer le doc temporaire
        tempDoc.close(SaveOptions.DONOTSAVECHANGES);
        
        // Revenir au doc principal
        app.activeDocument = doc;
    }

    alert("Exportation ICO terminée ! Format 128x128 PNG-24.");
}

main();