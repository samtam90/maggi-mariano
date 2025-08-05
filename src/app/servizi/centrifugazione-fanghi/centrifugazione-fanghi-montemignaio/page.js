import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montemignaio",
  canonical: links.servizi["centrifugazione-fanghi"]["montemignaio"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montemignaio",
  locationNames: { label: "Montemignaio", href: "montemignaio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
