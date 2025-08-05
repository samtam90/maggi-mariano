import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Tuoro sul Trasimeno",
  canonical: links.servizi["noleggio-bagni-chimici"]["tuoro-sul-trasimeno"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Tuoro sul Trasimeno",
  locationNames: { label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
