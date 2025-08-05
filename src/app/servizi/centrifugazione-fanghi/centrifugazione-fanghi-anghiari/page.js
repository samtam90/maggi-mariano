import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Anghiari",
  canonical: links.servizi["centrifugazione-fanghi"]["anghiari"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Anghiari",
  locationNames: { label: "Anghiari", href: "anghiari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
