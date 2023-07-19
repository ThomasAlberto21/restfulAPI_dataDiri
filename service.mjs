import Data from './data.mjs';

export class Service {
  constructor(){
    this.data = Data;
  }

  getJsonData() {
    return JSON.stringify({
      code: 200,
      status: 'OK',
      data: this.data.map((value, index) => {
        return {
          id: index,
          nama: value?.nama,
          tempat_lahir: value?.tempat_lahir,
          tgl_lahir: value?.tgl_lahir,
          jenis_kelamin: value?.jenis_kelamin,
          gol_darah: value?.gol_darah,

          alamat: {
            jalan: value?.jalan,
            kota: value?.kota,
            negara: value?.negara,
          },
          agama: value?.agama,
          status: value?.status,
          pekerjaan: value?.pekerjaan,
          kewarganegaraan: value?.kewarganegaraan,
        };
      }),
    });
  }

  getData(req, res) {
    res.write(this.getJsonData());
    res.end();
  }
}
