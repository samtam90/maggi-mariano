import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Caprese Michelangelo",
  canonical: links.servizi["centrifugazione-fanghi"]["caprese-michelangelo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Caprese Michelangelo",
  locationNames: { label: "Caprese Michelangelo", href: "caprese-michelangelo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
