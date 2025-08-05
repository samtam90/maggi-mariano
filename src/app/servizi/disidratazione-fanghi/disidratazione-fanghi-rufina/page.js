import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Rufina",
  canonical: links.servizi["disidratazione-fanghi"]["rufina"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Rufina",
  locationNames: { label: "Rufina", href: "rufina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
