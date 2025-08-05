import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Terni",
  canonical: links.servizi["disidratazione-fanghi"]["terni"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Terni",
  locationNames: { label: "Terni", href: "terni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
