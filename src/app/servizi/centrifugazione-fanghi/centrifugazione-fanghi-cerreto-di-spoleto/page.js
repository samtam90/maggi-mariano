import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cerreto di Spoleto",
  canonical: links.servizi["centrifugazione-fanghi"]["cerreto-di-spoleto"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cerreto di Spoleto",
  locationNames: { label: "Cerreto di Spoleto", href: "cerreto-di-spoleto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
