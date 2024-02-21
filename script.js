function aplikasiTiket(){
    alert("Aplikasi Tiket");

    const nama = prompt("Masukkan nama Anda: ");
    const umur = prompt("Masukkan umur Anda: ");
    const studio = prompt("Pilih studio: \nA - Studio A\nB - Studio B\nC - Studio C").toUpperCase();

    if(umur > 13){
        if(studio === "A"){
            alert(`Tiket ${nama}, Studio A, Umur ${umur}`);
        } else if(studio === "B"){
            alert(`Tiket ${nama}, Studio B, Umur ${umur}`);
        } else if(studio === "C"){
            alert(`Tiket ${nama}, Studio C, Umur ${umur}`);
        } else {
            alert("Pilihan tidak tersedia");
        }
    } else {
        alert("Maaf, anda belum boleh memasuki studio")
    }
}