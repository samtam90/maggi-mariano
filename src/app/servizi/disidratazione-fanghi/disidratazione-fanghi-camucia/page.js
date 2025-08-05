import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Camucia",
  canonical: links.servizi["disidratazione-fanghi"]["camucia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Camucia",
  locationNames: { label: "Camucia", href: "camucia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
