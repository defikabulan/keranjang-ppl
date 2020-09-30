# 🛒 Simple Cart App

Aplikasi cart sederhana. Disadur dan dimodifikasi dari

[![Simple Cart App](https://github-readme-stats.vercel.app/api/pin?username=kodeid-resources&repo=simple-cart-app&title_color=fff&icon_color=f9f9f9&text_color=9f9f9f&bg_color=2C393F)](https://github.com/kodeid-resources/simple-cart-app)

# Acknowledgment

## [Riza Fahmi](https://github.com/rizafahmi)

# Cara menjalankan

```bash
$ git clone https://github.com/defikabulan/keranjang-ppl.git
$ cd keranjang-ppl                         # Change current dir to the newly created one.
$ npm install                              # Install Node.js dependencies.
$ npm start                                # Launch application.
$ Ctrl + right click http://localhost:1234 # Preview to website
$ npm test                                 # Launch application test (if you want test).
```

# Perubahan Source Code

Berikut ini adalah daftar perubahan source code keranjang belanja ini:

1. Mengubah input price dan qty menjadi number dan juga mengubahnya menjadi readonly. Alasan saya mengubah kedua input tersebut menjadi readonly karena ketika barang sudah masuk ke keranjang belanja, user tidak dapat mengubah harga, hanya bisar merubah qty saja. Mengubah qty saya buat hanya bisa diubah melalui tombol plus(+) dan minus(-) saja, tidak melalui field input secara langsung.
2. Membuat function disableDecrement dan juga testingnya.
3. Membetulkan function incrementQty.
4. Membuat function subTotal dan juga testingnya.
