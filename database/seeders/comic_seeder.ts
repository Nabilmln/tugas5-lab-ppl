import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comic from '../../app/models/comic.js'

export default class extends BaseSeeder {
  async run() {
    await Comic.createMany([
      {
        title: 'One Piece',
        author: 'Eiichiro Oda',
        genre: 'Adventure',
        description: 'Petualangan Monkey D. Luffy dan kru bajak lautnya mencari harta karun terbesar di dunia, One Piece.',
        releaseYear: 1997
      },
      {
        title: 'Naruto',
        author: 'Masashi Kishimoto',
        genre: 'Action',
        description: 'Kisah Naruto Uzumaki, seorang ninja muda yang bercita-cita menjadi Hokage.',
        releaseYear: 1999
      },
      {
        title: 'Attack on Titan',
        author: 'Hajime Isayama',
        genre: 'Dark Fantasy',
        description: 'Kisah umat manusia yang berjuang melawan Titan, makhluk raksasa yang memakan manusia.',
        releaseYear: 2009
      },
      {
        title: 'Dragon Ball',
        author: 'Akira Toriyama',
        genre: 'Martial Arts',
        description: 'Petualangan Goku dalam mencari Dragon Ball dan melawan musuh-musuh kuat.',
        releaseYear: 1984
      },
      {
        title: 'Death Note',
        author: 'Tsugumi Ohba',
        genre: 'Psychological Thriller',
        description: 'Kisah Light Yagami yang menemukan Death Note, buku yang bisa membunuh siapa saja yang namanya ditulis di dalamnya.',
        releaseYear: 2003
      },
      {
        title: 'Jujutsu Kaisen',
        author: 'Gege Akutami',
        genre: 'Supernatural',
        description: 'Kisah Yuji Itadori yang bergabung dengan organisasi penyihir untuk melawan kutukan.',
        releaseYear: 2018
      },
      {
        title: 'Berserk',
        author: 'Kentaro Miura',
        genre: 'Dark Fantasy',
        description: 'Kisah Guts, seorang prajurit bayaran yang berjuang melawan nasib dan kekuatan gelap.',
        releaseYear: 1989
      },
      {
        title: 'Hunter x Hunter',
        author: 'Yoshihiro Togashi',
        genre: 'Adventure',
        description: 'Petualangan Gon Freecss dalam perjalanannya menjadi Hunter profesional.',
        releaseYear: 1998
      },
      {
        title: 'Monster',
        author: 'Naoki Urasawa',
        genre: 'Psychological Thriller',
        description: 'Kisah Dr. Kenzo Tenma yang memburu seorang psikopat yang pernah dia selamatkan.',
        releaseYear: 1994
      },
      {
        title: 'Baki',
        author: 'Keisuke Itagaki',
        genre: 'Martial Arts',
        description: 'Kisah Baki Hanma dalam perjalanannya menjadi petarung terkuat di dunia.',
        releaseYear: 1991
      },
      {
        title: 'Chainsaw Man',
        author: 'Tatsuki Fujimoto',
        genre: 'Action',
        description: 'Kisah Denji yang menjadi Chainsaw Man untuk membayar utang dan mencapai mimpinya.',
        releaseYear: 2018
      },
      {
        title: 'Tokyo Ghoul',
        author: 'Sui Ishida',
        genre: 'Supernatural',
        description: 'Kisah Kaneki Ken yang menjadi setengah ghoul setelah transplantasi organ.',
        releaseYear: 2011
      }
    ])
  }
}