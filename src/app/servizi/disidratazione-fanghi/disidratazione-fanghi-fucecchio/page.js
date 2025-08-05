import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Fucecchio",
  canonical: links.servizi["disidratazione-fanghi"]["fucecchio"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Fucecchio",
  locationNames: { label: "Fucecchio", href: "fucecchio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
