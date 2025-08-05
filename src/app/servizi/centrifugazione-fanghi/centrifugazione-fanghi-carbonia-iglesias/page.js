import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Carbonia Iglesias",
  canonical: links.servizi["centrifugazione-fanghi"]["carbonia-iglesias"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Carbonia Iglesias",
  locationNames: { label: "Carbonia Iglesias", href: "carbonia-iglesias" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["carbonia-iglesias"],
      name: "Carbonia Iglesias",
  }),
});
