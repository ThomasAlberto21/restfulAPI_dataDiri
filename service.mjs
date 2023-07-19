export class Service {
  data = [
    {
      nama: 'Thomas',
      umur: 19,
      pekerjaan: 'Mahasiswa',
    },
  ];

  getJsonData() {
    return JSON.stringify({
      code: 200,
      status: 'OK',
      data: this.data.map((value, index) => {
        return {
          id: index,
          nama: value?.nama,
          umur: value?.umur,
          pekerjaan: value?.pekerjaan,
        };
      }),
    });
  }

  getData(req, res) {
    res.write(this.getJsonData());
    res.end();
  }
}
