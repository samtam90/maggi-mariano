import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Reggello",
  canonical: links.servizi["disidratazione-fanghi"]["reggello"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Reggello",
  locationNames: { label: "Reggello", href: "reggello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
