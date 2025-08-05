import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Carbonia Iglesias",
  canonical: links.servizi["disidratazione-fanghi"]["carbonia-iglesias"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Carbonia Iglesias",
  locationNames: { label: "Carbonia Iglesias", href: "carbonia-iglesias" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["carbonia-iglesias"],
      name: "Carbonia Iglesias",
  }),
});
