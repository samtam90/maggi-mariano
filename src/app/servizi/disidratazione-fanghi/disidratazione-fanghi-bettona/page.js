import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Bettona",
  canonical: links.servizi["disidratazione-fanghi"]["bettona"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Bettona",
  locationNames: { label: "Bettona", href: "bettona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
