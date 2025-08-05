import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Sigillo",
  canonical: links.servizi["centrifugazione-fanghi"]["sigillo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Sigillo",
  locationNames: { label: "Sigillo", href: "sigillo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
