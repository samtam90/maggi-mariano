import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cerreto di Spoleto",
  canonical: links.servizi["disidratazione-fanghi"]["cerreto-di-spoleto"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cerreto di Spoleto",
  locationNames: { label: "Cerreto di Spoleto", href: "cerreto-di-spoleto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
