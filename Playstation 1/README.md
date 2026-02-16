# PS1 Softmod Project: FreePSXBoot on SCPH-7502
This repository documents my process of modding a **PlayStation 1 (SCPH-7502)** using **FreePSXBoot**. This method requires no physical chip and runs entirely from a Memory Card.

> [!CAUTION]
> **WARNING:** Jailbreaking the console carries risks. Follow every step precisely.

---

## 🛠 1. Hardware Used & Ressources
* **Console** PS1 (PAL) Model SCPH-7502.
* **Support Console** PS2 with FreeMcBoot (used to flash the PS1 memory card).
* **Memory Cards** 1x Original PS1 Memory Card (for the exploit). 1x Standard PS1 Memory Card (for game saves).
* **Memory Card Annihilator (MCA)** [Releases (github) Memory Card Annihilator](https://github.com/ffgriever-pl/Memory-Card-Annihilator/releases)
* **Unirom** [Releases (github) FreePSXBoot](https://github.com/brad-lin/FreePSXBoot/releases) (information about [Unirom](https://consolemods.org/wiki/PS1:Unirom))
---
## 💾 2. Preparation
Since the **MC2 (Slot 2)** version of FreePSXBoot is choosed, the exploit card in Slot 2 can remain and save card can stay in Slot 1. This is the most convenient setup.
> [!NOTE]
> **NOTE:** Once booted on the exploit, press a joypad key to see the menu.

---

## 🚀 3. Flashing the Card
The **PS2 with FreeMcBoot** is used to write the image.
* **Tool** Memory Card Annihilator (MCA) or Unirom Boot Disc.
* **Issue Encountered** The PS2 may freeze when inserting a previously "cracked" card. Thus, the MC must be ***formated*** with a PS1 running the Unirom.
* **System Dialog** If macOS shows "The disk you inserted was not readable," **click Ignore**.
* **Power Supply** If using a 3.5" mechanical HDD, ensure USB-SATA adapter has an external power brick. USB ports alone often lack the amperage to spin up these drives.

Since we are using a **PS2 (FreeMcBoot)** to prepare the PS1 exploit card, follow these precise steps to avoid system crashes and ensures a clean flash.

### Using Memory Card Annihilator
This is the most reliable method if the memory card is already ___corrupted___ by an old exploit.
1. Download ```mca.elf``` (Memory Card Annihilator v2.0 or newer).
2. Launch the ```.elf``` via **uLaunchELF** on the PS2 without the PS1 card inserted.
3. To prevent the PS2 from freezing, wait until the MCA main menu is up and running.
   * Insert the PS1 Memory Card into **Slot 2**.
   * If the software detects it without crashing, select **"Format"** (Full Format). This wipes any previous exploit data.
4. Writing the Image
   * Select **"Restore Image"**.
   * Browse the USB drive (`mass:/`) and select the `FreePSXBoot_SCPH7502_MC2.mcd` file.
   * Confirm the write process to Slot 2.

### Important Notes
* Ensure that the BIOS version is the correct one (usually **v4.1** for the 7502).

---

## 🏠 4. Usage
1. Insert the FreePSXBoot card into **Slot 2**.
2. Turn on the PS1 with no disc (or lid open).
3. Enter the **Memory Card Manager**.
4. The exploit will trigger, booting into the **Unirom** interface _(press a key to disclose the menu)_.
5. Insert the backup disc and enjoy!

---

## 💿 5. How to Burn Backups (Preserving the Laser)
The laser lens in the SCPH-7502 is aging. To minimize strain on the optical block and prevent "skipping" or premature failure, follow these golden rules for burning backups.

### 1. High-Quality Media
Avoid "no-name" or budget CD-Rs. Cheap discs have low reflectivity, forcing the laser to increase its intensity.
* **Recommended** Verbatim DataLifePlus (AZO technology) is the gold standard for retro consoles.
* **Type** Use **CD-R** only. Never use CD-RW (rewritable), as they will not work and can damage the lens.

### 2. Software & Format
* **Software (Mac)** Use **Burn** ((https://burn-osx.sourceforge.io/)), and the copy tab.
* **Files** Always load the **.cue** file, not the .bin. The .cue contains the track metadata necessary for proper PS1 audio/data sync.

### 3. The "Burning Speed" Myth
There is a common misconception that a CD must be burned at 1x speed. 
* **The Reality** Modern burners and modern CD-Rs are designed to be written at higher speeds. Burning at 1x on a 52x burner often creates *more* errors (jitters).
* **Best Practice** Aim for a "Medium-Low" speed. Usually **10x, 16x, or 24x** is the sweet spot for modern hardware. "Maximum" speed must be avoided at all costs.

### 4. Maintenance Tips
If backups struggle to boot:
* **Cleaning** Gently clean the lens with a Q-tip and 90% (or higher) Isopropyl Alcohol.
* **Disc Condition** Keep burned discs dust and scratch-free. A scratch on a CD-R is much harder for the laser to read than a scratch on a retail pressed disc.
