import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Rufina",
  canonical: links.servizi["centrifugazione-fanghi"]["rufina"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Rufina",
  locationNames: { label: "Rufina", href: "rufina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
