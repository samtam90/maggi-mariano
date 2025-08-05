import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cavriglia",
  canonical: links.servizi["centrifugazione-fanghi"]["cavriglia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cavriglia",
  locationNames: { label: "Cavriglia", href: "cavriglia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
