import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Preci",
  canonical: links.servizi["centrifugazione-fanghi"]["preci"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Preci",
  locationNames: { label: "Preci", href: "preci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
