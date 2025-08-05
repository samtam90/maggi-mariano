import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pontassieve",
  canonical: links.servizi["centrifugazione-fanghi"]["pontassieve"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pontassieve",
  locationNames: { label: "Pontassieve", href: "pontassieve" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
