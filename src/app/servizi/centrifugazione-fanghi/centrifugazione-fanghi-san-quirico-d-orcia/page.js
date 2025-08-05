import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi San Quirico d'Orcia",
  canonical: links.servizi["centrifugazione-fanghi"]["san-quirico-d-orcia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi San Quirico d'Orcia",
  locationNames: { label: "San Quirico d'Orcia", href: "san-quirico-d-orcia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
