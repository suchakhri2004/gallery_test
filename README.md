Gallery

Simple Single Page Application built with Next.js + SCSS 

---

Features
- Display 60 images mock data from placehold.co
- Load 12 images per scroll
- Each image has random tags (`#fullstack`, `#frontend`, `#backend`)
- Click on a tag → filter gallery by that tag
- Responsive Masonry Layout

---

Tech Stack
- [Next.js] (App Router)
- [SCSS] (styling)
- Mock data generator with Math.random()

**** ข้อ 6
ผมยังไม่มีประสบการณ์ในการออกแบบระบบ Production แบบเต็มรูปแบบและต้องรองรับผู้ใช้จำนวนมากมาก่อนครับ
ที่ผ่านมาเคย deploy โปรเจกต์ระดับธรรมด ด้วยบริการ Cloud สำเร็จรูป เช่น

Vercel (สำหรับ Next.js frontend)

Render (สำหรับรัน Node.js backend เล็ก ๆ)

Supabase (สำหรับฐานข้อมูลและ Authentication)

โดยแนวทางที่ผมเข้าใจในตอนนี้คือ ใช้บริการ Cloud เหล่านี้ในการแยกหน้าที่ดังนี้:

Frontend → Deploy บน Vercel 

Backend/API → ใช้ Render สำหรับ Node.js/Express

Database → ใช้ Supabase

ซึ่งข้อดีคือสามารถเริ่มใช้งานได้ง่าย ไม่ต้อง config server เอง เหมาะกับโปรเจคธรรมดาทั่วไป

ในอนาคตหากได้ร่วมงานจริง ผมยินดีเรียนรู้เพิ่มเติมเรื่องการ setup production ที่ใช้ VPS + Nginx + PM2 + CI/CD pipeline เพื่อให้ระบบมีความเสถียร ปลอดภัย และรองรับผู้ใช้งานได้มากขึ้น ขอบคุณครับ
