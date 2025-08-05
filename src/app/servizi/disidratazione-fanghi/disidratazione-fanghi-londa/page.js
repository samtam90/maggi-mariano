import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Londa",
  canonical: links.servizi["disidratazione-fanghi"]["londa"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Londa",
  locationNames: { label: "Londa", href: "londa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
