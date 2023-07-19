import Data from './data.mjs';

export class Service {
  constructor() {
    this.dataDiri = Data;
  }

  getJsonData() {
    return JSON.stringify({
      code: 200,
      status: 'OK',
      data: this.dataDiri.map((value, index) => {
        return {
          id: index,
          nama: value?.nama,
          tempat_lahir: value?.tempat_lahir,
          tgl_lahir: value?.tgl_lahir,
          jenis_kelamin: value?.jenis_kelamin,
          gol_darah: value?.gol_darah,
          alamat: {
            jalan: value?.alamat?.jalan,
            kota: value?.alamat?.kota,
            negara: value?.alamat?.negara,
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

  createData(req, res) {
    req.addListener('data', (data) => {
      const body = JSON.parse(data.toString());
      this.dataDiri.push(body);

      res.write(this.getJsonData());
      res.end();
    });
  }

  updateData(req, res) {
    req.addListener('data', (data) => {
      const body = JSON.parse(data.toString());
      if (this.dataDiri[body.id]) {
        this.dataDiri[body.id] = body;
      }

      res.write(this.getJsonData());
      res.end();
    });
  }
}
