import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Stroncone",
  canonical: links.servizi["disidratazione-fanghi"]["stroncone"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Stroncone",
  locationNames: { label: "Stroncone", href: "stroncone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
