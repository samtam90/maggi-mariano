import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Campobasso",
  canonical: links.servizi["disidratazione-fanghi"]["campobasso"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Campobasso",
  locationNames: { label: "Campobasso", href: "campobasso" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["campobasso"],
      name: "Campobasso",
  }),
});
