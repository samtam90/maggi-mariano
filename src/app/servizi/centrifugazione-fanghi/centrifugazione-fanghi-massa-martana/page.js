import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Massa Martana",
  canonical: links.servizi["centrifugazione-fanghi"]["massa-martana"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Massa Martana",
  locationNames: { label: "Massa Martana", href: "massa-martana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
