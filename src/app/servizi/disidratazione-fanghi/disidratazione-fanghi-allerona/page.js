import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Allerona",
  canonical: links.servizi["disidratazione-fanghi"]["allerona"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Allerona",
  locationNames: { label: "Allerona", href: "allerona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
