import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Teramo",
  canonical: links.servizi["disidratazione-fanghi"]["teramo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Teramo",
  locationNames: { label: "Teramo", href: "teramo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["teramo"],
      name: "Teramo",
  }),
});
