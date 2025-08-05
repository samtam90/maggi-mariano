import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cavriglia",
  canonical: links.servizi["disidratazione-fanghi"]["cavriglia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cavriglia",
  locationNames: { label: "Cavriglia", href: "cavriglia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
