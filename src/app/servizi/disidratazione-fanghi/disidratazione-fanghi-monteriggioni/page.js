import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Monteriggioni",
  canonical: links.servizi["disidratazione-fanghi"]["monteriggioni"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Monteriggioni",
  locationNames: { label: "Monteriggioni", href: "monteriggioni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
