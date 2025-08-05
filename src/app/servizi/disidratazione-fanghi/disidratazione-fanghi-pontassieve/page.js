import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Pontassieve",
  canonical: links.servizi["disidratazione-fanghi"]["pontassieve"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Pontassieve",
  locationNames: { label: "Pontassieve", href: "pontassieve" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
