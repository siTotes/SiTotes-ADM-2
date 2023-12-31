//━━━[ Bahasa sehari hari ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
exports.contoh = (prefix, command, style, style2 = "query") => {
    return `Contoh penggunaan: \n${prefix + command} ${style2}\n\n${prefix + command} ${style}`
}
exports.wait = () => {
    return `⏳ Mohon tunggu sebentar`
}
exports.ok = () => {
    return `✅ Done.`
}
exports.sending = (pe) => {
    if (pe) {
        return 'Sedang Mengirim → ✈️' + `\n${pe}`
    } else {
        return 'Sedang Mengirim → ✈️'
    }
}

exports.doneErr = (pe) => {
    if (pe) {
        return `Convert Berhasil. Tetapi bot Gagal Mengirim ${pe} ke anda. Coba ulang`
    } else {
        return `Convert Berhasil. Tetapi bot Gagal Mengirim File ke anda. Coba ulang`
    }
}

exports.waitt = () => {
    return '⏳'
}
exports.sendingg = () => {
    return '✈️'
}
exports.okk = () => {
    return `✅`
}


//━━━[ Kusus Grub ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
exports.bukanadmin = () => {
    return 'Tolong Jadikan Admin grub untuk menggunakan fitur ini😉'
}

exports.adminOnly = () => {
    return 'Fitur ini khusus admin saja😉'
}

exports.targetkick = () => {
    return `Kirim nomer/tag/reply target yang ingin di kick !`
}

exports.nokickpemilik = () => {
    return `Kamu tidak dapat mengeluarkan SiTotes dan Pembuat grub`
}


exports.useradd = () => {
    return `Kirim nomer yang ingin di tambahkan !`
}


exports.userpromot = () => {
    return `Kirim nomer yang ingin di naikkan jabatannya / di jadikan admin !`
}

exports.userdemot = () => {
    return `Kirim nomer yang ingin di turunkan jabatannya / di jadikan member atau bukan admin !`
}

//━━━[ Game ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
exports.JwbTrue = (soalapa, rpmoney, totalxp, mainlagi) => {
    return `╭─❒ 「 *🎉 SELAMAT 🎉* 」 
├ _🎊Jawaban Anda benar 🎊_ 
│
├→ ╭─( *🎁 Hadiah* )
│     │
│     ├💰 *Rp: ${rpmoney}* 
│     ├ 🧩 + *${totalxp}* _XP_ 
│     ╰→
╰❒ *${soalapa}* 


ketik Perintah:
*#${mainlagi}*

Untuk bermain lagi 👍`
}

exports.JwbHampir = () => {
    return `*🧐 _Ya, dikit lagi Kak_ 😅*`
}
exports.JwbErr = () => {
    return `*😮‍💨 Jawaban Salah 👻*
━━━━━━━━━━━━
 ` + '```Ketik Perintah:``` ' + `
*#bantuan*
untuk meminta bantuan 😌dan

*#nyerah*
untuk menyerah 😵`
}


//━━━[ Sticker ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
exports.SmemeErr = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks nya*`
}
exports.NoToStik = (prefix, command) => {
    return `Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`
}


//━━━[ Menu ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
exports.allmenu = (prefix) => {
    return `*╭─❒ 「 Semua Fitur 」*
│
*├╭─( Media download )────•*
││
*│├╭→ #Tiktok*
│││
││├ ${prefix}tt
││├ ${prefix}downloadtiktok
││├ ${prefix}tiktokunduh
││├ ${prefix}tiktok
││╰×
││
*│├╭→ #Instagram*
│││
││├ ${prefix}ig
││├ ${prefix}igdl
││├ ${prefix}igdownload
││├ ${prefix}igunduh
││├ ${prefix}igsv
││├ ${prefix}instagramdl
││├ ${prefix}instagram
││├ ${prefix}instagrams
││├ ${prefix}instagramsdl
││├ ${prefix}instagramunduh
││├ ${prefix}igreel
││├ ${prefix}igvideo
││├ ${prefix}igimage
││├ ${prefix}igpost
││╰×
││
*│├╭→ #Youtube*
│││
││├ ${prefix}youtube
││├ ${prefix}youtubedownload
││├ ${prefix}youtubedl
││├ ${prefix}ytdl
││├ ${prefix}youtubemp4
││├ ${prefix}youtubemp3
││├ ${prefix}ytmp4
││├ ${prefix}ytmp3
││╰×
││
*│├╭→ #Youtube Music Apis*
│││
││├ ${prefix}mainkan  *judul >3
││├ ${prefix}music    *judul
││├ ${prefix}play     *judul
││├ ${prefix}lagu     *judul
│││
││╰×
││
│╰──────────•
│
│
*├╭─( Media Sticker )────•*
││
*│├╭→ #Sticker*
│││
││├ ${prefix}s
││├ ${prefix}sticker
││├ ${prefix}stiker
││╰×
││
*│├╭→ #Memegen Api*
│││
││├ ${prefix}smeme
││├ ${prefix}smemegen
││├ ${prefix}stickermeme
││├ ${prefix}smeme2
││╰×
││
*│├╭→ #Attp/ttp Api*
│││
││├ ${prefix}ttp
││├ ${prefix}attp
││╰×
││
│╰─────────────•
│
│
*├╭─( Admin Grub )────•*
││
*│├╭→ #Kick / Mengeluarkan*
│││
││├ ${prefix}kick
││├ ${prefix}keluarkan
││├ ${prefix}hapus
││├ ${prefix}remove
││╰×
││
*│├╭→ #Add / Menambah*
│││
││├ ${prefix}add
││├ ${prefix}tambah
││├ ${prefix}new
││╰×
││
*│├╭→ #Promote / JadikanAdmin*
│││
││├ ${prefix}promote
││├ ${prefix}naikan
││├ ${prefix}jabatkan
││╰×
││
*│├╭→ #Demote / Jadikan Tidak Admin*
│││
││├ ${prefix}demote
││├ ${prefix}turunkan
││├ ${prefix}kucilkan
││╰×
││
│╰──────────•
│
╰❒`
}
