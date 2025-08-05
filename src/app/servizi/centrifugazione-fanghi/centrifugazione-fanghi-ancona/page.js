import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Ancona",
  canonical: links.servizi["centrifugazione-fanghi"]["ancona"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Ancona",
  locationNames: { label: "Ancona", href: "ancona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["ancona"],
      name: "Ancona",
  }),
});
