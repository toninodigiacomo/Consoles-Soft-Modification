# PS3 Game Management Guide: Copying & Launching (2026)

This guide covers how to transfer backups to the PS3 and launch them directly from the main menu (XMB) using **webMAN Mod**.

---

## 📂 1. Understanding Game Formats

| Format | Storage Path | Description |
| :--- | :--- | :--- |
| **JB Folder** | `/GAMES/` | A folder containing a `PS3_GAME` subfolder. Best for FAT32 compatibility. |
| **ISO File** | `/PS3ISO/` | A single disc image file. Recommended for performance and bypassing 4GB limits. |
| **PKG File** | (Install only) | Digital installer files. Install via *Package Manager*. |

---

## 💾 2. Transferring via USB (FAT32)

### Preparation
1. Ensure the USB drive is **FAT32** with **MBR** partition scheme.
2. Create a folder named `GAMES` at the root of the USB.
3. Copy the games folder inside: `USB > GAMES > [Game Name] > PS3_GAME`.

### Copying to Internal HDD (Recommended)
1. Open **multiMAN** on the PS3.
2. Navigate to **mmOS** (File Manager).
3. Open `dev_usb000/GAMES/` in one window.
4. Open `dev_hdd0/GAMES/` in another.
5. Highlight your game, press `Circle` ◯ -> **Copy**, then **Paste** it into `dev_hdd0/GAMES/`.

---

## 🚀 3. Launching Games from XMB (The Pro Way)

To avoid opening multiMAN every time, use **webMAN Mod**.

### Installation
1. Install the `[webMAN_Mod.pkg](https://github.com/aldostools/webman-mod/releases)`.
2. Launch the installer from the XMB for a full installation.
3. The console will reboot.

### Loading a Game
1. On the XMB, go to the **webMAN Games** (or "Mes Jeux") folder.
2. Select **PlayStation 3**.
3. Click on the game. The system will "mount" it (notified by a popup).
4. Launch the "Disc" icon that appears on the main menu.

---

## 🌐 4. Transferring via FTP (For Files > 4GB)

If the game has files larger than 4GB, FAT32 USBs won't work. Use FTP.

1. **Connect** Ensure PS3 and Mac are on the same network.
2. **On PS3** Open multiMAN or webMAN (look for your IP address in System Info).
3. **On Mac** Use an FTP client (like **FileZilla**).
   - Host: `Your PS3 IP`
   - Port: `21`
4. **Transfer** Drop your game folders into `/dev_hdd0/GAMES/`.

---

## ❄️ 5. Managing Temperatures
webMAN Mod automatically controls fan speed to prevent the "Yellow Light of Death" (YLOD).

* **Access Settings** Press `Select + Start` on the XMB to see your current temps.
* **Web Interface** Open your Mac's browser and type your PS3's IP address. Go to **Setup** to change fan profiles.
* **Safety** Aim to keep your CPU (Cell) and GPU (RSX) below **68°C**.

---

## 🛠 Troubleshooting
* **Game not showing?** Go to `webMAN Games > Setup > Refresh XML`.
* **Black Screen?** In multiMAN, check the game settings and try enabling "BD Mirror" or "Internal".
* **Split Files:** If using FAT32, ensure large files are "split" (multiMAN will ask to merge them when copying to HDD).
