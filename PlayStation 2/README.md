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

## ⚙️ 4. Installation Workflow

1. **Identify the drive** ```diskutil list```. Let's assume the drive is _/dev/disk11_ for instance.
2. **Initial Wipe** To avoid GPT/MBR partition conflicts, erase the first sectors of the drive:
```
sudo dd if=/dev/zero of=/dev/rdiskX bs=1m count=10
```
3. **Connection Test** Verify if the tool can communicate with the drive:
```
sudo ./hdl_dump toc /dev/diskX
```
If it returns a list or a blank table without errors, the disk is ready.

> [!NOTE]
> Note on rdisk vs disk: Always use /dev/rdiskX for commands like dd. It bypasses the macOS filesystem buffer, speeding up the transfer of large images (like FHDB or ISOs).

---

## 💾 5. Installing FMCB

Installing FreeMcBoot (FMCB)

Unlike FHDB, FreeMcBoot is installed on a Sony Memory Card. This keeps your HDD dedicated solely to games and allows for a cleaner boot process.
#### Method 1: Using a pre-modded console (Recommended)
Only work if already  access to a modded PS2 :
* Copy the FMCB Installer to a USB stick (FAT32).
* Launch wLaunchELF on the PS2 and run the FMCBInstaller.elf.
* Select Format MC, then Multi-Install (this allows the card to work on any PS2 model).

#### Method 2: The "FreeMcBoot Card" shortcut
The easiest way for macOS users is often to buy a pre-installed FMCB card (widely available) and then use the Mac strictly for HDD game management.

#### HDD Preparation for FMCB/OPL
Since you are **not** booting from the HDD, it's only needed to flash an .img file. The drive needs to be initialized for Open PS2 Loader (OPL).
* **Format the HDD** The drive can be formated directly inside the PS2 using the LaunchELF Disk Manager or formatted by OPL itself.
* **Verify via Mac** Once formatted by the PS2, Mac tool will finally be able to see the structure:
```
sudo ./hdl_dump toc /dev/rdiskX
```

## 🏠 6. Recommended Homebrew

With FMCB on the Memory Card, shortcut keys can be configured (held during boot):
* **L1** Launch Open PS2 Loader (OPL) from the HDD.
* **R1** Launch wLaunchELF (File Manager).
* **Select** Access FMCB Configurator.

#### The “Auto-Boot” method (the cleanest)
FreeMcBoot can be configured to launch OPL automatically as soon as the console is turned on, without going through the standard PS2 menu.

#### Procedure on the PS2
- Turn on the PS2 and launch the **FreeMcBoot Configurator** application (found in your current menu).
- Choose the controller type (usually X or O).
- Select “Configure E1 launch keys...”.
- Look for the “Auto” line:
  - Press X (or O) on “Auto”.
  - Browse through the folders: mc0:/ (Slot 1) or mc1:/ (Slot 2) -> BOOT/ -> look for OPNPS2LD.ELF (the OPL file name).
  - Once selected, press **Return**.
- **Crucial step** Select **Save CNF to MC0** (or MC1 depending on your cathe configuration) to save the settings.
- Restart the console. It should boot directly to the HDD game list.
