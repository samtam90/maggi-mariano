import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Lodi",
  canonical: links.servizi["centrifugazione-fanghi"]["lodi"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Lodi",
  locationNames: { label: "Lodi", href: "lodi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["lodi"],
      name: "Lodi",
  }),
});
