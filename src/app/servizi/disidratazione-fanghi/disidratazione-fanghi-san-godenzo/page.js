import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi San Godenzo",
  canonical: links.servizi["disidratazione-fanghi"]["san-godenzo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi San Godenzo",
  locationNames: { label: "San Godenzo", href: "san-godenzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
