# 3K Data DB Clone

เว็บเช็คข้อมูล 3K ที่ดึงข้อมูล public จากเว็บเก่า `3kwira.com/data/`

## ใช้งาน

```powershell
cd D:\O\3kdb-clone
python -m http.server 8765
```

แล้วเปิด:

```text
http://127.0.0.1:8765/
```

## ข้อมูลที่คัดลอกมา

- `data/items.json` จาก `cache_items_v23_5.json`
- `data/monsters.json` จาก `cache_monsters_v10.json`

รูปไอเท็มและมอนสเตอร์ถูกดาวน์โหลดมาไว้ในเครื่องแล้ว:

- `items/` จำนวน 5,921 ไฟล์
- `boss/` จำนวน 2,248 ไฟล์
