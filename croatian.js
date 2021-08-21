clear();

function mirovina(pocetna_placa, staz, porast_place, inflacija) {
	const udio_place_za_mirovinu = 0.20;
  let placa = pocetna_placa;
  let ukupna_mirovina = [];
  let ukupna_inflacijska_mirovina = [];
  let inflacija_na_mirovinu_godisnje = [];
  let godisnja_mjesecna_placa = [];

	for (let i = 1; i <= staz; i++) {
    placa = placa + (placa * porast_place);
    godisnja_mjesecna_placa.push(placa);
    let godisnja_placa = placa * 12;
    let godisnja_mirovina = godisnja_placa * udio_place_za_mirovinu;
    ukupna_mirovina.push(godisnja_mirovina);
    
    inflacija_na_mirovinu_godisnje = ukupna_mirovina.reduce((acc, item) => acc + item) * inflacija;
    ukupna_inflacijska_mirovina.push(inflacija_na_mirovinu_godisnje);
	}
  
  let godisnje_uplate_mirovine = ukupna_mirovina;
  let godisnja_inflacija_na_mirovinu = ukupna_inflacijska_mirovina;
  ukupna_mirovina = ukupna_mirovina.reduce((acc, item) => acc + item);
  ukupna_inflacijska_mirovina = ukupna_inflacijska_mirovina.reduce((acc, item) => acc + item);


  return {
  	ukupna_uplata_mirovina: ukupna_mirovina,
    ukupna_inflacija_na_mirovinu: ukupna_inflacijska_mirovina,
    postotak_inflacije_na_mirovinu: ukupna_inflacijska_mirovina / ukupna_mirovina * 100,
    mjesecne_place_po_godinama: godisnja_mjesecna_placa,
    godisnje_uplate_mirovine: godisnje_uplate_mirovine,
    godisnja_inflacija_na_mirovinu: godisnja_inflacija_na_mirovinu
  }
}


console.log(mirovina(5000, 40, 0.01, 0.02));
