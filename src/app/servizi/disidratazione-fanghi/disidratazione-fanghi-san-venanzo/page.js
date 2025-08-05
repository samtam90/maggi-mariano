import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi San Venanzo",
  canonical: links.servizi["disidratazione-fanghi"]["san-venanzo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi San Venanzo",
  locationNames: { label: "San Venanzo", href: "san-venanzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
