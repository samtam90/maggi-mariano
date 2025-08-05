import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Londa",
  canonical: links.servizi["centrifugazione-fanghi"]["londa"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Londa",
  locationNames: { label: "Londa", href: "londa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
