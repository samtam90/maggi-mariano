import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Genova",
  canonical: links.servizi["centrifugazione-fanghi"]["genova"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Genova",
  locationNames: { label: "Genova", href: "genova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["genova"],
      name: "Genova",
  }),
});
