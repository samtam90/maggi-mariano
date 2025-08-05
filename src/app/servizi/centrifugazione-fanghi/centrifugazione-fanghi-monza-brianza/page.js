import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Monza Brianza",
  canonical: links.servizi["centrifugazione-fanghi"]["monza-brianza"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Monza Brianza",
  locationNames: { label: "Monza Brianza", href: "monza-brianza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["monza-brianza"],
      name: "Monza Brianza",
  }),
});
