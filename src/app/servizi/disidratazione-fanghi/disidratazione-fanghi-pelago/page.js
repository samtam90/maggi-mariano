import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Pelago",
  canonical: links.servizi["disidratazione-fanghi"]["pelago"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Pelago",
  locationNames: { label: "Pelago", href: "pelago" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
