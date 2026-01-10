# PS2 Ultimate HDD Manager
Repository dedicated to preparing and managing an internal hard drive for PlayStation 2 “Fat” directly from a Mac. This project includes compiled tools, installation guides, and optimized scripts for fast game injection.

> [!CAUTION]
> **WARNING:** Jailbreaking the console carries risks. Follow every step precisely.

---

## 🛠 1. Prerequisites
* **PS2 "Fat" Console** Models SCPH-3xxxx or SCPH-5xxxx.
* **Network Adapter** Official Sony adapter (SATA modded) or 3rd party BitFunx/Gamestar SATA adapters.
* **Storage** SATA HDD or SSD (Up to 2TB recommended).
* **USB to SATA Adapter** To connect the drive to your Mac.

---

## 💾 2. Preparation (macOS Instructions)
macOS often locks external drives to prevent data loss. To allow command-line tools to interact with the **PS2's APA partition table**, the disk must be released.

1. Identify your disk number withe the command ```diskutil list```.
2. **The Bypass Command** Before every operation with PS2 tools, run:
```
diskutil unmountDisk /dev/diskX
```
_(Replace X with your actual disk number, e.g., /dev/disk11)._

---

## 🔍 3. Compatibility Check
> [!CAUTION]
> **WARNING:** Never initialize or partition the drive using macOS Disk Utility.
* **Physical Fit** Ensure the drive slides smoothly into the Network Adapter. Some 2.5" SSDs may require a 3D-printed bracket.
* **System Dialog** If macOS shows "The disk you inserted was not readable," **click Ignore**.
* **Power Supply** If using a 3.5" mechanical HDD, ensure USB-SATA adapter has an external power brick. USB ports alone often lack the amperage to spin up these drives.

---

## ⚙️ Processus (Installation Workflow)

1. **Identify your drive** ```diskutil list```. Let's assume your drive is _/dev/disk11_.
2. **Initial Wipe** To avoid GPT/MBR partition conflicts, erase the first sectors of the drive:
```
sudo dd if=/dev/zero of=/dev/rdisk11 bs=1m count=10
```
3. **Connection Test** Verify if the tool can communicate with the drive:
```
sudo ./hdl_dump toc /dev/diskX
```
If it returns a list or a blank table without errors, the disk is ready.

> [!NOTE]
> Note on rdisk vs disk: Always use /dev/rdiskX for commands like dd. It bypasses the macOS filesystem buffer, speeding up the transfer of large images (like FHDB or ISOs).
