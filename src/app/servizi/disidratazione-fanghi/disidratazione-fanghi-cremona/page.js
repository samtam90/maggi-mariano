import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cremona",
  canonical: links.servizi["disidratazione-fanghi"]["cremona"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cremona",
  locationNames: { label: "Cremona", href: "cremona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["cremona"],
      name: "Cremona",
  }),
});
